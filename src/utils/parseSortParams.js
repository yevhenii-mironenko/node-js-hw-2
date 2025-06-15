import { SORT_ORDER, ALIAS_MAP } from '../contstants/index.js';

const parseSortOrder = (sortOrder) => {
  const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
  return isKnownOrder ? sortOrder : SORT_ORDER.ASC;
};

const parseSortBy = (sortBy) => {
  const keysOfContact = [
    '_id',
    'contactType',
    'isFavourite',
    'phoneNumber',
    'name',
    'email',
  ];

  const mappedSortBy = ALIAS_MAP[sortBy] || sortBy;

  if (keysOfContact.includes(mappedSortBy)) {
    return mappedSortBy;
  }

  return '_id';
};

export const parseSortParams = (query) => {
  const { sortOrder, sortBy } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
