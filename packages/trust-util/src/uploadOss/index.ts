import hmacSHA1 from 'crypto-js/hmac-sha1';
import * as encBase64 from 'crypto-js/enc-base64';
import * as Base64 from 'js-base64';
import axios from 'axios';
import type { uploadConfig } from './type';

const uploadOss = (params: uploadConfig) => {
  const expiration = new Date(new Date().getTime() + 60000 * 60 * 24).toISOString();
  const policyText = {
    expiration: expiration, //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
    conditions: [
      ['content-length-range', 0, 1048576000], // 设置上传文件的大小限制
    ],
  };
  const policyBase64 = Base64.encode(JSON.stringify(policyText));
  const message = policyBase64;
  const bytes = hmacSHA1(message, params.access_key_secret);
  const signature = encBase64.stringify(bytes);
  const uploadParam = {
    key: params.filename,
    endpoint: params.endpoint,
    OSSAccessKeyId: params.access_key_id,
    policy: message,
    signature: signature,
    success_action_status: '200',
    'x-oss-security-token': params.security_token,
  };
  const formData = new FormData();
  formData.append('key', uploadParam.key);
  formData.append('endpoint', uploadParam.endpoint);
  formData.append('OSSAccessKeyId', uploadParam.OSSAccessKeyId);
  formData.append('policy', uploadParam.policy);
  formData.append('signature', uploadParam.signature);
  formData.append('success_action_status', uploadParam.success_action_status);
  formData.append('x-oss-security-token', uploadParam['x-oss-security-token']);
  formData.append('file', params.file);
  axios
    .post(params.url, formData)
    .then((res: any) => {
      console.log(res);
    })
    .catch((err: any) => {
      console.log(err);
    });
};
export type { uploadConfig };
export default uploadOss;
