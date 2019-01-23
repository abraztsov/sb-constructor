export const returnActionPayload = (state, action) => action.payload;

export const updateItemInArray = (array, predicate, updateCallback) =>
  array.map((item) => {
    if (!predicate(item)) {
      return item;
    }
    return updateCallback(item);
  });

export const moveItemInArrayForvard = (array, predicate, updateCallback) => {
  const itemIndex = array.findIndex(predicate);

  if (itemIndex === -1) return [...array];

  const [removed] = array.splice(itemIndex, 1);

  return updateCallback ?
    [updateCallback(removed), ...array]
    :
    [removed, array];
};

export const updateEachItemInArray = (array, updateCallback) => array.map(updateCallback);

export const removeItemFromArray = (array, predicate) => {
  const itemIndex = array.findIndex(predicate);

  if (itemIndex !== -1) {
    array.splice(itemIndex, 1);
  }

  return [...array];
};

export const addToArray = (array = [], item) => array.concat(item);
