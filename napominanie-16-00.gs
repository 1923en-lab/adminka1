/**
 * ZHULDYZ STOM — ежедневное напоминание админу внести данные за день.
 * Присылает письмо около 16:00 (Алматы) со ссылкой на страницу.
 * Скрипт НЕ видит, внесены ли данные: письмо приходит каждый день.
 */
const CONFIG = {
  EMAIL: 'zhuldyz.stom8@gmail.com',
  PAGE_URL: 'https://ВАШ-ЛОГИН.github.io/НАЗВАНИЕ-РЕПОЗИТОРИЯ/',
  TZ: 'Asia/Almaty',
  SKIP_WEEKDAYS: [] // дни без письма: 0=воскресенье, 6=суббота. Например [0]
};

function remind() {
  const now = new Date();
  const wd = Number(Utilities.formatDate(now, CONFIG.TZ, 'u')) % 7; // 0=вс
  if (CONFIG.SKIP_WEEKDAYS.indexOf(wd) !== -1) return;
  const d = Utilities.formatDate(now, CONFIG.TZ, 'dd.MM.yyyy');
  MailApp.sendEmail(
    CONFIG.EMAIL,
    'ZHULDYZ STOM: внесите данные за ' + d,
    'Пожалуйста, внесите данные за сегодня (' + d + ') на вкладке «Таблица дня»:\n' +
    'сколько пациентов принял каждый врач и по скольким из них написан план.\n\n' +
    CONFIG.PAGE_URL
  );
}

/** Запустите ОДИН раз: создаёт ежедневный запуск около 16:00. */
function setupTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'remind') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('remind').timeBased().atHour(16).nearMinute(0).everyDays(1).inTimezone(CONFIG.TZ).create();
}

/** Для проверки: запустите вручную, письмо придёт сразу. */
function testEmail() { remind(); }
