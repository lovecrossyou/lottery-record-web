import fetch from '@/config/fetch'


export const googleOcr = image=> fetch('/goocr',{image},'POST');
