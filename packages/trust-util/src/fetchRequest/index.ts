export interface setting {
  method?: any;
  headers?: any;
  credentials?: any;
  body: any;
  mode?: any;
  redirect?: any;
  cache?: any;
  dataType?: any;
  data?: any;
}
const fetchRequest = (url: string, setting: setting) => {
  //设置参数的初始值
  const opts = {
    method: (setting.method || 'GET').toUpperCase(), //请求方式
    headers: setting.headers || {}, // 请求头设置
    credentials: setting.credentials || true, // 设置cookie是否一起发送
    body: setting.body || {},
    mode: setting.mode || 'cors', // 可以设置 cors, no-cors, same-origin
    redirect: setting.redirect || 'follow', // follow, error, manual
    cache: setting.cache || 'default', // 设置 cache 模式 (default, reload, no-cache)
  };
  const dataType = setting.dataType || 'json', // 解析方式
    data = setting.data || ''; // 参数

  // 参数格式化
  function params_format(obj: any) {
    let str = '';
    for (const i in obj) {
      str += `${i}=${obj[i]}&`;
    }
    return str.split('').slice(0, -1).join('');
  }

  if (opts.method === 'GET') {
    url = url + (data ? `?${params_format(data)}` : '');
  } else {
    setting.body = data || {};
  }
  return new Promise((resolve, reject) => {
    fetch(url, opts)
      .then(async (res) => {
        const data =
          dataType === 'text'
            ? await res.text()
            : dataType === 'blob'
            ? await res.blob()
            : await res.json();
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default fetchRequest;
