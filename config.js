// 1) Вставьте сюда данные из Firebase: Настройки проекта → Ваши приложения → Веб-приложение → firebaseConfig.
window.FIREBASE_CONFIG = {
  apiKey: "ВСТАВЬТЕ",
  authDomain: "ВСТАВЬТЕ",
  projectId: "ВСТАВЬТЕ",
  storageBucket: "ВСТАВЬТЕ",
  messagingSenderId: "ВСТАВЬТЕ",
  appId: "ВСТАВЬТЕ"
};
// 2) UID двух пользователей из Firebase: Authentication → Users → столбец «User UID».
window.APP_ROLES = {
  OWNER_UID: "UID_ВЛАДЕЛЬЦА",   // вы: видите отчёт и задачи
  ADMIN_UID: "UID_АДМИНИСТРАТОРА" // админ: вносит пациентов и планы
};
