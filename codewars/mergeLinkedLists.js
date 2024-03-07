/*
    Pasos a seguir:
    - Crear un dummy node sin ningun valor, para facilitar el manejo de las listas.
    - Crear 2 punteros, prev (encargado de vincular los nodos) y current(iterara las listas).
*/

/*  list1 = [1,2,4] 
    list2 = [1,3,4] 
    list3 = [1,1,2,3,4,4];
*/

const mergeTwoLists = (list1, list2) => {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
