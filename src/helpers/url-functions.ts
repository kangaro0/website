import { INGAME_STATIC_RESOURCES_URL } from '@/main';
import { EAvatarCategory } from '@/store/typings';


export function getAvatarUrl(category: EAvatarCategory, picId: number, isClassic: boolean) {
    if (category == EAvatarCategory.SPECIAL) {
      return `${INGAME_STATIC_RESOURCES_URL}icons/specialAvatars/SPECIAL_${picId}.jpg`;
    }
    else {
      const raceIconPrefix = isClassic ? 'classic/' : '';
      const categoryString = EAvatarCategory[category].toString();
      return `${INGAME_STATIC_RESOURCES_URL}icons/raceAvatars/${raceIconPrefix}${categoryString}_${picId}.jpg`;
    }
  }