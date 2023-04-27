## Содержание

- [Задание](#Задание)

- [Для ментора](#Для-ментора)

- [Требования](#Требования)

- [Оценивание задания](#Оценивание-задания)

- [Материалы](#Материалы)

## Задание

RS Clone - это командное задание, в ходе выполнения которого вам необходимо разработать клон игры или приложения. Команда сама выбирает тематику проекта. Это может быть как точная, так и упрощённая копия существующего проекта, или ваше собственное приложение\*.

\* Здесь и дальше в тексте задания под _приложением_ понимаем игру или приложение (web или desktop), которое создаётся командой в ходе выполнения задания.

### Формирование команд

- Количество участников команды — **ТРИ** человека.
- Команды формируются по желанию студентов.
- У каждой команды обязательно должен присутствовать тим лид.
- Студенты могут попросить ментора курировать их проект, консультировать, проводить код-ревью (ментор не может писать код).
- Для участия в проекте необходимо заполнить таблицу:
  - [Проекты](https://docs.google.com/spreadsheets/d/1TvamMUtv4M3eRIG0ImRuTZ5FIgwpas66E96ZPq5NWWk/edit#gid=1420356662) для уже сформировавшихся команд.
  - Так же вы можете заполнить свои данные в таблицу на вкладке [Разработчики](https://docs.google.com/spreadsheets/d/1TvamMUtv4M3eRIG0ImRuTZ5FIgwpas66E96ZPq5NWWk/edit#gid=515837878) для студентов, которые ищут себе команду.
- Для всех, кто не найдет команду до старта задачи будет распределение в команды, где не хватает участников и сформированы новые.

### Тематика приложения

- На этом потоке нельзя получить баллы за фильтрацию и сортировку элементов (за функционал, реализованный в Online-store).
- При выборе тематики приложения исходите из собственных интересов и возможностей. Оптимально, если приложение, клон которого вы создаёте, будет хорошо вам известно, вы будете знать особенности его работы, видеть возможные варианты его изменения и улучшения.
- Выбирайте приложение, при работе над которым сможете проявить свои сильные стороны, реализовать свои возможности, получить максимально качественный результат.
- Также при выборе тематики стоит учитывать, что его реализация должна быть достаточно трудозатратна, так как за условный "калькулятор" не будет начислено максимальное количество балов.

### Описание процесса командной работы

**Тим лид команды**
- По умолчанию тим лидом команды является участник с самым высоким скором. По взаимной договорённости он может передать свои обязанности другому участнику команды.
- Тим лид координирует деятельность команды, занимается распределением задач, планированием, а также разрешает спорные ситуации между участниками команды.
- В случае необходимости проводит дополнительные митинги с командой - для уточнения требований поставленных перед командой задач.

**Каналы связи**
Тим лид команды создаёт сервер в Discord и приглашает на созданный сервер участников своей группы или они сами к нему присоединяются (это может быть сервер ментора, или любой другой удобный для команды, к которому у всех участников есть доступ).
Рекомендуемые каналы для сервера:
- all (для всех общий)
- materials (полезные ссылки)
- git (вопросы по гиту)
- work-status (раздел для ежедневного отчета каждого участника команды)
По умолчанию сервер в Discord является основным каналом связи группы (им может быть любой другой оптимальный для вас способ коммуникации, например, Telegram etc.).
Для видео- или аудио-конференций могут использоваться голосовой канал в Discord, Skype, Telegram и т.д.

**Первый митинг**
- Проводится на следующий день после распределения по командам. Время и форма проведения митинга оговариваются заранее. Итоги митинга желательно зафиксировать в письменном виде.
- Задача первого митинга – определить базовые соглашения, структуру, окружение проекта, правила командной работы, создать все необходимые условия для начала процесса разработки.
- Перед проведением митинга всем участникам группы необходимо разобраться с требованиями таска, продумать свои предложения по их реализации, определиться со своими возможностями и предпочтениями – реализацией каких задач могли бы и хотели бы заняться.
- Тим лид создаёт приватный репозиторий, в который приглашает всех участников своей команды. Также тим лид создаёт базовую конфигурацию проекта: устанавливает и настраивает webpack, eslint, eslint-config-airbnb-base, babel, gitignore и другие необходимые зависимости.
- В ходе митинга участникам необходимо определить сильные стороны друг друга, выслушать предложения и выяснить предпочтения каждого, спланировать работу на ближайшую неделю.
- После митинга у каждого участника команды должен быть свой участок работы, за который он отвечает и результатом выполнения которого является часть общего проекта.

**Доски и Координация работы**
- Для ведения проекта и максимально удобного визуального отображения хода работы - рекомендуестя использовать таск-трекеры, такие как GitHub Projects или Trello (или удобные для вас аналоги).
- Названия и предназначение колонок может быть следующим: ToDo, In Progress, Review, Done.
- В канале work-status (еще лучше - в формате ежедневного митинга) каждый участник команды (в том числе тим лид) каждый день составляют мини-отчёты по схеме:
  1. что сделал за предыдущий день, сколько времени потратил на процесс разработки
  2. что планирует делать сегодня
  3. какие возникли трудности, вопросы, проблемы и т д.
- Таск-трекеры и ежедневные мини-отчёты позволяют исключить дублирование и параллелизм в работе команды, когда два участника работают над одной задачей. Необходимость каждый день отчитываться о своём вкладе в командную работу стимулирует активность участников команды, позволяет сравнить свой результат с результатом других, быть в курсе процесса разработки.
- На основе таск-трекера и мини-отчётов составляется worklog – отчёт о проделанной командной работе с указанием вклада каждого участника команды. В worklog вносятся конкретные реализованные фичи или элементы приложения. Образно, то, за что вам будет готов платить работодатель. Варианты "учился писать код" или "читал книгу", "много думал" не годятся.

### Выполнение проекта

- Работа над проектом распределяется на недельные спринты.
- Каждая команда ведет Trello board (или другой аналогичный сервис, например, GitHub Projects), в котором фиксируется процесс разработки.
- **После дедлайна** команда должна подготовить и провести life презентацию своего проекта (отдельное задание).

## Для Ментора

**Менторы не должны писать код**, их помощь заключается в определении лучших решений, организации команды и демонстрации инструментов, которые команда могла бы использовать в своём проекте.
В случае, если в команде оказывается несколько студентов разных менторов, менторам необходимо объединиться в команду и совместно сопровождать процесс разработки приложения.

## Требования

### Требования к репозиторию

- Для разработки приложения **тим лид** команды в своём аккаунте github создаёт репозиторий, в который приглашает всех участников команды.
- Особенности командной работы с репозиторием описаны в [документации курса](https://docs.rs.school/#/final-task?id=Работа-с-репозиторием).
- Название ветки, в которой ведётся разработка — `develop`, ветка `master`/`main` пустая, содержит только README.md файл.
- В файле README.md необходимо добавить инструкцию по запуску приложения.
- История коммитов должна отображать процесс разработки приложения и соответствовать [требованиям к коммитам](https://docs.rs.school/#/git-convention).
- Демо-версия приложения размещается на `gh-pages`, `netlify`, либо на другом подобном хостинге.
- После выполнения задания или дедлайна, создайте pull request из ветки `develop` в ветку `master`/`main` в соответствии с [требованиями к pull request](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr).
- Кроме вышеперечисленных требований pull request должен содержать:
  - описание фич, реализованных при создании приложения, и ожидаемого количества баллов за каждую из них. Суммарное количество баллов за все реализованные фичи не может превышать **620**;
  - ссылку на деплой вашего проекта. Если нет ссылки — **требуется обоснование её отсутствия** и **видео**, в котором демонстрируются все реализованные фичи. Если нет ссылки на деплой или видео, то проверяющий в праве не оценивать работу;
  - для тех, кто будет делать бекенд: добавьте в репозиторий папку с бекендом, или добавьте в pull request ссылку на репозиторий с ним.
- репозиторий, в котором велась работа над проектом, **после дедлайна необходимо сделать публичным** (в случае если он был приватным).

### Технические требования

- **Обязательно использовать TypeScript**.
- Работа приложения проверяется в браузере Google Chrome последней версии.
- Разрешается использовать jQuery только в качестве подключаемой зависимости для UI библиотек. Использование jQuery в основном коде приложения не допускается.
- Разрешено использовать Angular / React / Vue.
- Разрешено использовать JS библиотеки (кроме JQuery).
- Можно использовать bootstrap, CSS фреймворки, HTML и CSS препроцессоры.
- Можно использовать Canvas, WebGL, SoundAPI и другие встроенные API браузера.
- Можно использовать графические движки: Threejs, Phaser, Pixi, Babylon.
- Рекомендуется создать и использовать бекенд (данная рекомендация связана с очень высоким спросом на фронтенд-разработчиков, знакомых хотя бы с основами node.js. Язык для Back-end должен быть из JS стека).

### Требования к оформлению приложения

- в футере (для игры — в описании) приложения должны быть ссылки на гитхабы авторов приложения, год создания приложения, [логотип курса](https://rs.school/images/rs_school_js.svg) со [ссылкой на курс](https://rs.school/js/).

### Как сабмитить задание

Данное задание предполагает проверку по группам. Для этого **тимлид каждой команды** отправляет ссылку на PR команды через RS App. Таким образом, распределение работ для проверки ведется по группам. Впоследствии, все участники команд могут быть задействованы в проверке каждого / одного из заданий, которые тимлид получил для проверки. Порядок проверки задания и распределение функциональных частей для тестирования между участниками команды определяет тимлид.

\* Убедитесь, что pull request доступен для проверки. Для этого откройте ссылку, которую сабмитите в rs app в режиме инкогнито браузера.

## Оценивание задания

**Максимальный балл за задание** — _620_.

### Штрафные баллы

За данную работу не предусмотрены штрафные баллы. Однако, работы, балл которых по мнению проверяющих был завышен могут быть отправлены на дополнительную проверку администрацией. Для этого будет создана отдельная форма, ссылка на которую будет размещена в анонсах, во время старта кросчека.

### Процесс оценивания

- Максимальное количество баллов, которое можно получить за разработку приложения — 620(общее количество баллов за все реализованные фичи не может быть больше максимального).
- Каждая команда **самостоятельно** решает какие фичи будет реализовывать, их можно взять из предложенных в задании примеров или определить **самостоятельно**, исходя из особенностей реализованного вами приложения.
- Перечень реализованных фич с количеством баллов, на которое команда оценивает каждую из них, нужно разместить в описании pull request. Pull request должен быть доступен для проверяющих.
- Приложение оценивается в ходе кросс-чека, презентацию оценивает специально созданное жюри.
- Язык приложения, видео, презентации может быть английский или русский.
- **Запрещено ставить баллы за само наличие framework, библиотеки, только за фичи, которые можно реализовать с их помощью.**

### Игра

<details><summary> Примеры оценивания фич игры </summary>

- Действие игры происходит на разных уровнях, картах, локациях, используются анимированные переходы между уровнями, анимации победы, поражения.
- Расширенные настройки звука/видео/графики. Уровни громкости, язык озвучивания, вкл/выкл отображение теней, частиц.
- Есть статистика, которая отображает прогресс игры, нанесенный урон, потраченное на игру время, процент выполнения задания или уровня etc.
- Написание логики для компьютерного противника.
- Есть онлайн режим.
- Есть чат.
- В игре проработана "физика".
- 3d игра.

</details>

### Приложение (не игра)

<details><summary> Примеры оценивания фич приложения </summary>

#### Примеры из UI

- Есть возможность управление приложением/игрой с клавиатуры или наличие более пяти hot keys.
- Есть возможность переключения 2 и более языков.
- Есть хотя бы один модальный диалог.
- Реализован routing (без перезагрузки страницы приложения).
- Возможность кастомизации приложения, настроек пользователя.
- Реализовано больше трёх анимаций, для создания которых используются ключевые кадры или svg-анимация.
- Приложение выполнено в едином стиле, для стилизации могут использоваться Bootstrap/Material UI/Ant design/etc.
- Приложение работает на телефоне/планшете/PC.

#### Примеры работы приложения

- Возможность работать на нескольких вкладках приложения, например как разные рабочие листы в exсel, макеты в фигме.
- Возможность добавлять либо настраивать дополнительные окна: палитру цветов, слоев для графических редакторов.
- Есть статистика, которая отображает прогресс работы приложения, процент выполнения задания etc.
- Выделение текста, фигур, изображений, либо правый клик по ним вызывает всплывающее меню с доступными опциями, такими как копировать, вставить, вырезать, сгруппировать, повернуть, отразить, изменить шрифт.

#### Примеры технического стека приложения

- Использован Canvas/WebGL/etc.
- Работа с Audio API.
- Есть не меньше двадцати Unit test.
- Использован webpack.
- Сохранение и загрузка чего-либо с использованием Local storage.
- Приложение/игра написана на TypeScript.

</details>

### Back-end

Вы можете использовать публичные API. Можно скачать бек и использовать его.
Начисление баллов за бек возможно при следующих условиях:

- Написан своими руками (с нуля) и имеет историю коммитов.
- Back-end задеплоен и отвечает на запросы POSTman (пример запроса нужно указать в ПР или Readme файле).
- Использовать JS стек, например TS/Express/Node.js/http.createServer()/Nest.js/Deno.js/Fastify/KOA.js.

<details><summary> Примеры оценивания фич back-end </summary>

- Использован REST API.
- Использован MVC паттерн.
- Подключение и работа с БД.
- Используется локальная БД.
- Используется ORM(sequelize/mongoose).
- Приложение разбито на микросервисы.
- Регистрация.
- Аутентификация.
- Авторизация.
- Приложение отображает какую-либо статистику/графики/таблицы, данные для которых получает от бекенда.
- Реализован nodejs и express.
- Реализована работа с изображениями.
- Реализована работа с WebSocket.
- Реализована аутентификация в WebSocket.
- Сервер отдаёт корректные ответы, отдаёт HTTP ошибки с нормальными body, по которым можно понять,
  что произошло, пишет читаемые логи.

</details>

