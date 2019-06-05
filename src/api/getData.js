import fetch from '@/config/fetch'


export const addLottery = data=> fetch('/api/lottery/add',data,'POST');

export const addCategoryM = data=> fetch('/category_m/add',data,'POST');
export const listCategoryM = data=> fetch('/category_m/list');
export const delCategoryM = id=> fetch('/category_m/del/'+id,'','DELETE');

