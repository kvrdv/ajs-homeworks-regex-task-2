export default function validateNumber(number) {
  const val1 = number.replace(/[\s()\-+]/g, ''); // убираем пробелы, скобки, тире, плюсы

  if ((/^8(?=9)/.test(val1) === true)) { // российский номер, начинающийся с 8
    const val2 = val1.replace(/8/g, '7'); // меняем 8 на 7
    return '+'.concat(val2); // возвращаем с +
  } if ((/^7(?=9)/.test(val1) === true)) { // российский номер, начинающийся с 7
    return '+'.concat(val1); // возвращаем с +
  } if ((/^8(?=6)/.test(val1) === true)) { // китайский номер
    return '+'.concat(val1); // возвращаем с +
  } throw new Error('Номер введен неверно!');
}
