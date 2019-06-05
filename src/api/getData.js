import fetch from '@/config/fetch'


export const addLottery = data=> fetch('/api/lottery/add',data,'POST');
export const listLottery = ()=> fetch('/api/lottery/list');
export const updateLottery = data=> fetch('/api/lottery/update',data,'POST');


export const addCategoryM = data=> fetch('/api/category_m/add',data,'POST');
export const listCategoryM = data=> fetch('/api/category_m/list');
export const delCategoryM = id=> fetch('/api/category_m/del/'+id,'','DELETE');

