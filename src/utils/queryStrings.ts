export const serialize = (obj: { [key: string]: any }): string => {
  return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${obj[k] != null ? encodeURIComponent(obj[k]) : ''}`).join('&');
}

export const getQueryVariables = (query: string): { [key: string]: string } => {
  const vars = query.substr(1).split('&');
  const queryObject: { [key: string]: string } = {}
  vars.forEach((variable) => {
    const pair = variable.split('=');
    queryObject[pair[0]] = pair[1];
  });

  return queryObject;
}
