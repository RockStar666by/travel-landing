import familyImage from '../../assets/vacations/family.png';
import youthImage from '../../assets/vacations/youth.png';
import excursionImage from '../../assets/vacations/excursion.png';
import cruiseImage from '../../assets/vacations/cruise.png';

export const vacationsArray = [
  {
    bgImage: `${familyImage}`,
    title: 'СЕМЕЙНЫЙ',
    description: 'Спокойствие взрослым и развлечение детям'
  },
  {
    bgImage: `${youthImage}`,
    title: 'МОЛОДЕЖНЫЙ',
    description: 'Сваденые церемонии и лушчие тусовочные места'
  },
  {
    bgImage: `${excursionImage}`,
    title: 'ЭКСКУРСИОННЫЙ',
    description: 'Уникальные маршруты и достопримечательности'
  },
  {
    bgImage: `${cruiseImage}`,
    title: 'КРУИЗНЫЙ',
    description: 'Отдых \n премиум класса'
  }
];
