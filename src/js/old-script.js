(function () {
  var STATE = {};
  var ROLE = '<%=ROLE%>';
  var frontSideCurrentValidDelegate = '<%=currentValidDelegatePersonIDString%>';

  STATE.vue = getTabFromUrl();
  STATE.filters = [];
  STATE.sort = 'date';
  STATE.sortDirection = 'DESC'; //ASC
  // STATE.urlServ = "custom_web_template.html?object_id=" + "<%= tools_web.get_web_param( curParams, "BACKEND_TEMPL_ID", null, true )%>";
  // STATE.urlServEstaff = "custom_web_template.html?object_id=" + "<%= tools_web.get_web_param( curParams, "BACKEND_ESTAFF_TEMPL_ID", null, true )%>";

  $('.main-nav').on('click', handleClickOnNav);

  $('#sendForm').on('click', handleClickSendForm);

  $('#subordinate_to_delegate_select').on(
    'input',
    buildModalSelectSubordinateDelegateDialog
  );
  $('#subordinate_to_delegate_select')
    .find('option')
    .each(function (item) {
      $(this).on('click', buildModalSelectSubordinateDelegateDialog);
    });

  $(document).ready(function () {
    init();
    setDatePicker();
    handleClickSendForm();
    setAttributeSelectedForDelegateSelectOptions(frontSideCurrentValidDelegate);
  });

  window.addEventListener('popstate', function (e) {
    STATE.vue = getTabFromUrl();
    setTab();
    handleClickSendForm();
  });

  function getTabFromUrl() {
    var pathName = window.location.pathname.split('/');
    if (pathName.length < 4) return 'all_request';
    return pathName[pathName.length - 1];
  }

  function setTabToUrl(tabName) {
    var pathName = window.location.pathname.split('/');
    if (pathName.length > 3) {
      pathName.pop();
    }
    var newPath = pathName.join('/') + '/' + tabName;
    history.replaceState({ param: 'Value' }, '', newPath);
  }

  function handleClickSendForm(e) {
    var data = getFormData(e);
    displaySpinner('flex');
    sendForm(data, buildRequestPage);
  }

  function setTab(e) {
    if (e != undefined) {
      var curVue = $(e.target).attr('content_id');
      if (curVue == undefined) return;
      setTabToUrl(curVue);
      STATE.vue = curVue;
      $('.tab.active').removeClass('active');
      $(e.target).addClass('active');
    } else {
      $('.tab.active').removeClass('active');
      $('.tab[content_id = "' + STATE.vue + '"]').addClass('active');
    }
  }

  function handleClickOnNav(e) {
    setTab(e);
    tableMount();
  }

  function tableMount() {
    STATE.sort = 'date';
    STATE.sortDirection = 'DESC';
    $('.tab-content').hide();
    $('#' + STATE.vue).show();
    handleClickSendForm();
  }

  function init() {
    $('#' + STATE.vue).show();
    setTab();
  }

  function sendForm(data, funcSuccesful) {
    try {
      sendRequest(STATE.urlServ, data, funcSuccesful);
    } catch (e) {
      console.log(e);
    }
  }

  function getFormData() {
    var data = {};

    switch (STATE.vue) {
      case 'all_request':
        data.method = 'getAllRequest';
        break;
      case 'request_for_approval':
        data.method = 'getRequestForApproval';
        break;
      case 'request_subordinates':
        data.method = 'getRequestSubordinates';
        break;
      case 'candidates':
        data.method = 'getCandidates';
        break;
      default:
        break;
    }

    data.role = ROLE;
    data.sort = STATE.sort;
    data.sort_direction = STATE.sortDirection;
    data = getFilters(data);

    return data;
  }

  function sendRequest(url, data, funcOnSuccess) {
    currentRequest = $.ajax({
      type: 'POST',
      url: url,
      dataType: 'json',
      data: data,
      success: funcOnSuccess,
    });
  }

  function displaySpinner(value) {
    $('#Gazprom__spinner').css('display', value);
  }

  function getFilters(data) {
    data.req_number =
      $('#' + STATE.vue + ' input[name="req_num"]').val() == 'Не выбрано'
        ? ''
        : $('#' + STATE.vue + ' input[name="req_num"]').val();
    data.position =
      $('#' + STATE.vue + ' input[name="position"]').val() == 'Не выбрано'
        ? ''
        : $('#' + STATE.vue + ' input[name="position"]').val();
    data.subdivision =
      $('#' + STATE.vue + ' input[name="org"]').val() == 'Не выбрано'
        ? ''
        : $('#' + STATE.vue + ' input[name="org"]').val();
    data.state = $('#' + STATE.vue + ' input[name="state"]').val();
    data.date1 = $('#' + STATE.vue + ' input[name="date1"]').val();
    data.date2 = $('#' + STATE.vue + ' input[name="date2"]').val();
    if (
      STATE.vue == 'request_for_approval' ||
      STATE.vue == 'request_subordinates'
    ) {
      data.initiator =
        $('#' + STATE.vue + ' input[name="initiator"]').val() == 'Не выбрано'
          ? ''
          : $('#' + STATE.vue + ' input[name="initiator"]').val();
    } else if (STATE.vue == 'candidates') {
      data.event_state = $(
        '#' + STATE.vue + ' input[name="event_state"]'
      ).val();
    }

    return data;
  }

  function buildModalDialog(data) {
    displaySpinner('none');
    console.log(data);
    var blob = {};
    var dialog =
      '<div id="wrapper_modal_window" class="active">' +
      '<div class="modal_window">' +
      '<h2 id="modal_title">' +
      data.name +
      '</h2>' +
      '<div class="modal_contant_body">';
    if (data.attachments.hasOwnProperty('attachment')) {
      dialog += '<div class="body_appl">Приложения:<div><ul>';
      data.attachments.attachment.forEach(function (item, index) {
        dialog +=
          '<li><a target="_blank" href="/candidate_attachment.html?eid=' +
          data.candidate_eid +
          '&index=' +
          index +
          '">' +
          item.type_desc +
          '</a></li>';
      });
      dialog += '</ul></div></div>';
    } else {
      dialog += '<div class="body_appl">Приложенные файлы отсутствуют</div>';
    }
    var commentsArr = data.comment.split(';');
    var commentsLen = commentsArr.length;
    if (commentsArr.length != 0) {
      dialog +=
        '<div class="body_comments"><span>Дополнительный комментарий: </span>';
      for (var i = 0; i < commentsLen; i++) {
        dialog += '<span class="comment">' + commentsArr[i] + '</span>';
      }
      dialog += '</div>';
    }

    dialog +=
      '<label for="event_comment">Новый комментарий: <textarea id="event_comment" rows="3"></textarea></label></div>';
    dialog +=
      '<div class="modal_window_btns" data_event_id="' + data.eid + '">';

    if (data.is_decisive) {
      data.actions.action.forEach(function (item, index) {
        dialog +=
          '<button class="Gazprom__button modal" id="' +
          item.id +
          '">' +
          item.name +
          '</button>';
      });
      dialog +=
        '<button class="Gazprom__button modal" id="cancel">Отмена</button>';
    } else {
      dialog +=
        '<button class="Gazprom__button modal" id="save">Отправить</button>' +
        '<button class="Gazprom__button modal" id="cancel">Отмена</button>';
    }

    dialog += '</div></div></div>';

    $('body').append(dialog);
    $('.modal_btn_cancel').on('click', function () {
      closeDialog('#wrapper_modal_window');
    });
    $('.modal_window_btns').on('click', function (e) {
      handleClickModalDialogBtn(e);
    });
  }

  function buildModalDialogPersonFullName(data) {
    displaySpinner('none');
    console.log(data);
    var blob = {};
    var dialog =
      '<div id="wrapper_modal_window" class="active">' +
      '<div class="modal_window">' +
      '<h2 id="modal_title">' +
      personFullnameForEventDialogPersonFullname +
      '</h2>' +
      '<div class="modal_contant_body">';
    if (data.attachments.hasOwnProperty('attachment')) {
      dialog += '<div class="body_appl">Приложения:<div><ul>';
      data.attachments.attachment.forEach(function (item, index) {
        if (item.type_desc == 'Резюме') {
          dialog +=
            '<li><a target="_blank" href="/candidate_attachment.html?eid=' +
            data.candidate_eid +
            '&index=' +
            index +
            '">' +
            item.type_desc +
            '</a></li>';
        }
      });
      dialog += '</ul></div></div>';
    } else {
      dialog += '<div class="body_appl">Резюме отсутствует</div>';
    }

    dialog +=
      '<div class="modal_window_btns" data_event_id="' + data.eid + '">';

    dialog +=
      '<button class="Gazprom__button modal" id="modal_dialog_person_fullname_cancel">Отмена</button>';

    dialog += '</div></div></div>';

    $('body').append(dialog);
    $('#modal_dialog_person_fullname_cancel').on('click', function () {
      closeDialog('#wrapper_modal_window');
    });
  }

  function handleClickModalDialogBtn(e) {
    var btn_id = $(e.target).attr('id');
    if (btn_id != 'cancel') {
      var data = {};
      data.method = 'ChangeEvent';
      data.event_id = $(e.currentTarget).attr('data_event_id');
      data.comment = $('#event_comment').val();
      data.occurrence_id = btn_id != 'save' ? btn_id : '';

      sendRequest(STATE.urlServEstaff, data, function (data) {
        if (data.result == '0') {
          handleClickSendForm();
        } else {
          throw Error(data);
        }
      });
    }

    closeDialog('#wrapper_modal_window');
  }

  function closeDialog(selector) {
    $(selector).remove();
  }

  function buildModalSelectSubordinateDelegateDialog(e, data) {
    e.preventDefault();
    //		displaySpinner('none');  // $("#ddlViewBy option:selected").val()
    var selected_subordinate_to_delegate_id = $(
      '#subordinate_to_delegate_select option:selected'
    ).val();
    var selected_subordinate_to_delegete_fullname = $(
      '#subordinate_to_delegate_select option:selected'
    ).text();

    var dialog =
      '<div id="wrapper_modal_window" class="active">' +
      '<div class="modal_window">';
    dialog +=
      selected_subordinate_to_delegate_id == ''
        ? '<h2>Не делегировать никому ваши права подачи заявок на подбор персонала?</h2>'
        : '<h2>Делегировать сотруднику ' +
          selected_subordinate_to_delegete_fullname +
          ' ваши права подачи заявок на подбор персонала?</h2>';
    dialog +=
      '<div class="modal_window_btns"><button class="Gazprom__button modal select_subordinates_delegate_button" style="margin: 10px;" id="select_subordinates_delegate_save_button">Да</button>' +
      '<button class="Gazprom__button modal select_subordinates_delegate_button"  style="margin: 10px;" id="select_subordinates_delegate_cancel_button">Нет</button></div>';

    dialog += '</div></div>';

    $('body').append(dialog);
    $('.select_subordinates_delegate_button').on('click', function (e) {
      var set_only_subordinate_delegate_checkbox_value = true; // $('#set_only_subordinate_delegate_checkbox').prop('checked');
      handleClickModalSelectSubordinateDelegateDialogBtn(e, {
        delegate_person_id: selected_subordinate_to_delegate_id,
        delegate_person_fullname: selected_subordinate_to_delegete_fullname,
        is_only_delegate: set_only_subordinate_delegate_checkbox_value,
      });
    });
  }

  function handleClickModalSelectSubordinateDelegateDialogBtn(e, data) {
    var btn_id = $(e.target).attr('id');
    if (btn_id != 'select_subordinates_delegate_cancel_button') {
      data.method = 'setNewDelegate';
      displaySpinner('flex');
      sendRequest(STATE.urlServ, data, function (data) {
        displaySpinner('none');
        setAttributeSelectedForDelegateSelectOptions(data);
      });
    }
    closeDialog('#wrapper_modal_window');
  }

  function setAttributeSelectedForDelegateSelectOptions(delegatesID) {
    $('#subordinate_to_delegate_select')
      .find('option')
      .each(function (item) {
        if ('' + delegatesID == '' + $(this).val()) {
          $(this).prop('selected', true);
        } else {
          $(this).prop('selected', false);
        }
      });
  }

  function buildRequestPage(items) {
    displaySpinner('none');

    var container = $('#' + STATE.vue);

    if (items.length == 0) {
      $(container)
        .find('.table_body')
        .empty()
        .append('<div>ничего не найдено</div>');
      return;
    }

    if (STATE.vue == 'candidates') {
      $(container)
        .find('.table_body')
        .html(
          '<table>' +
            "<thead class='nav-filters'>" +
            "<tr><th data_filter='date'><span>Дата события</span></th>" +
            "<th data_filter='event'><span>Событие</span></th>" +
            "<th data_filter='event_state'><span>Статус события</span></th>" +
            "<th data_filter='candidate_fullname'><span>ФИО кандидата</span></th>" +
            '<th><span>Дата создания заявки</span></th>' +
            "<th data_filter='number'><span>Номер заявки</span></th>" +
            "<th data_filter='state'><span>Статус заявки</span></th>" +
            "<th data_filter='org'><span>Подразделение</span></th>" +
            "<th data_filter='position'><span>Должность</span></th>" +
            '</tr>' +
            '</thead>' +
            "<tbody class='table_content'></tbody>" +
            '</table>'
        );

      $(container).find('.table_content').empty();

      items.forEach(function (elem) {
        $(container)
          .find('.table_content')
          .append(
            '<tr>' +
              '<td>' +
              elem.event_date +
              '</td>' +
              "<td data_id='" +
              elem.id +
              "' class='" +
              (elem.event_state == 'новое' ? 'btn_open_modal' : '') +
              "'>" +
              elem.event +
              '</td>' +
              '<td>' +
              elem.event_state +
              '</td>' +
              "<td data_id='" +
              elem.id +
              "' class='btn_open_modal_person_fullname'>" +
              elem.fullname +
              '</td>' +
              '<td></td>' +
              "<td><a href='_wt/request/" +
              elem.req_id +
              "'>" +
              elem.code +
              '</a></td>' +
              '<td>' +
              elem.req_state +
              '</td>' +
              '<td>' +
              elem.subd_name +
              '</td>' +
              '<td>' +
              elem.position_name +
              '</td>' +
              '</tr>'
          );
      });
    } else {
      $(container)
        .find('.table_body')
        .html(
          '<table>' +
            "<thead class='nav-filters'>" +
            "<tr><th data_filter='date'><span>Дата создания</span></th>" +
            "<th data_filter='number'><span>Номер заявки</span></th>" +
            "<th data_filter='org'><span>Подразделение</span></th>" +
            "<th data_filter='position'><span>Должность</span></th>" +
            "<th data_filter='initiator'><span>ФИО инициатора</span></th>" +
            "<th data_filter='state'><span>Статус заявки</span></th>" +
            "<th style='background-color:white; cursor: default;'></th>" +
            '</tr>' +
            '</thead>' +
            "<tbody class='table_content'></tbody>" +
            '</table>'
        );

      $(container).find('.table_content').empty();

      items.forEach(function (elem) {
        $(container)
          .find('.table_content')
          .append(
            "<tr data-list-id='" +
              elem.id +
              "'>" +
              '<td>' +
              elem.create_date +
              '</td>' +
              "<td><a href='_wt/request/" +
              elem.id +
              "'>" +
              elem.code +
              '</a></td>' +
              '<td>' +
              elem.person_org_name +
              '</td>' +
              '<td>' +
              elem.position_name +
              '</td>' +
              '<td>' +
              elem.person_fullname +
              '</td>' +
              '<td>' +
              elem.state +
              '</td>' +
              "<td style='background-color:white;'>" +
              (elem.state == '1. Создание заявки' && STATE.vue == 'all_request'
                ? "<span class='btn_delete_elem'><img src='gazprom/burenie/assets/img/trash-icon.png' alt=''/></span>"
                : '') +
              '</td>' +
              '</tr>'
          );
      });
    }

    $('.nav-filters th').on('click', sortTable);
    $('.btn_open_modal').on('click', openEventDialog);
    $('.btn_open_modal_person_fullname').on(
      'click',
      openEventDialogPersonFullname
    );
    ////////////////////////////////////////////////////////////////////////////////////////////
    $('.btn_delete_elem').click(deleteTableElem);
  }

  function deleteTableElem(e) {
    var message =
      'Вы точно хотите удалить выбранную заявку на подбор? Отменить данное действие будет невозможно.';
    var result = confirm(message);
    if (result) {
      var tr = e.currentTarget.parentElement.parentElement;
      var data = getFormData(e);
      data.list_id = tr.getAttribute('data-list-id');
      data.method = 'DeleteElem';

      displaySpinner('flex');

      try {
        sendRequest(STATE.urlServ, data, buildRequestPage);
      } catch (e) {
        console.error(e);
      }
    } else {
      return;
    }
  }

  function openEventDialog(e) {
    var data = {};
    data.event_id = $(e.target).attr('data_id');
    data.method = 'GetEventById';
    displaySpinner('flex');
    sendRequest(STATE.urlServEstaff, data, buildModalDialog);
  }

  var personFullnameForEventDialogPersonFullname = '';
  function openEventDialogPersonFullname(e) {
    var data = {};
    data.event_id = $(e.target).attr('data_id');
    data.method = 'GetEventById';
    displaySpinner('flex');
    personFullnameForEventDialogPersonFullname = $(e.target).text();
    sendRequest(STATE.urlServEstaff, data, buildModalDialogPersonFullName);
  }

  function sortTable(e) {
    var sortDirectionOld = STATE.sortDirection;
    var sortOld = STATE.sort;
    STATE.sort = $(e.currentTarget).attr('data_filter');

    if (sortOld == STATE.sort) {
      STATE.sortDirection = togleSortDirection(STATE.sortDirection);
    }
    handleClickSendForm();
  }

  function togleSortDirection(direction) {
    if (direction == 'ASC') {
      return 'DESC';
    } else {
      return 'ASC';
    }
  }

  function setDatePicker() {
    $.datepicker.regional['ru'] = {
      // 	// altFormat: "yy-mm-dd"
      closeText: 'Закрыть',
      prevText: 'Пред',
      nextText: 'След',
      // currentText: 'Сегодня',
      monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      monthNamesShort: [
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек',
      ],
      dayNames: [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
      ],
      dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
      dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      weekHeader: 'Нед',
      dateFormat: 'dd.mm.yy',
      firstDay: 1,
      // 	// isRTL: false,
      // 	// showMonthAfterYear: false,
      // 	// yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $('input.Gazprom__input-date').datepicker();
  }

  function cutLongString(length, string) {
    if (string.length > length + 3) {
      return string.substring(0, length) + '...';
    } else {
      return string;
    }
  }

  //работа селект начало
  $('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next().fadeOut();
    } else {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
      $(this).addClass('open');
      $(this).next().fadeIn();
    }
  });

  $('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this)
      .parent()
      .prev()
      .text(cutLongString(18, $(this).text()));
    if ($(this).attr('data_id') != undefined) {
      $(this).parent().prev().prev().val($(this).attr('data_id'));
    } else {
      $(this).parent().prev().prev().val($(this).text());
    }
  });

  $(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
      $('.select__head').removeClass('open');
      $('.select__list').fadeOut();
    }
  });
  //работа селект конец
})();
