// БОНУС: загрузка фото лекторов из облака (например, Yandex Object Storage).
// 1. Загрузите файлы 1.jpg … 10.jpg (папка src/assets/lecturers) в публичный бакет.
// 2. Создайте файл .env в корне проекта:
//      VITE_PHOTOS_URL=https://storage.yandexcloud.net/<имя-бакета>/lecturers
// Если переменная пуста или фото не загрузилось, берутся локальные файлы.
export const PHOTOS_CLOUD_URL = import.meta.env.VITE_PHOTOS_URL ?? "";
