
[![Build status](https://ci.appveyor.com/api/projects/status/drfceu9f3s5gcblp/branch/main?svg=true)](https://ci.appveyor.com/project/marinaustinovich/ra16-homeworks-composition-cards-and-collapse/branch/main)

deployment: https://cards-and-collapse.onrender.com/


Карточки
===

Вам необходимо реализовать компонент карточек, позволяющий использовать себя следующим образом:

![](./public/card1.png)

![](./public/card2.png)

В качестве CSS вы можете использовать Bootstrap, а подглядеть генерируемую разметку можете на [странице](https://getbootstrap.com/docs/4.3/components/card/).

Подсказка: используйте для этого `props.children` и `props` для отображения картинки.

# Collapse

Вам поручено реализовать аналог компонента [Collapse](https://getbootstrap.com/docs/5.0/components/collapse/#example).

Используйте следующие props:

- `collapsedLabel`,
- `expandedLabel`.

Если значения этих `props` не переданы, то они принимают значения по умолчанию `Развернуть` (для `collapsedLabel`) и `Свернуть` (для `expandedLabel`).

Попробуйте также реализовать анимацию с помощью CSS.
