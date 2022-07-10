export function formDataToObj(formData) {
  const res = {};

  for (let [key, val] of formData.entries())
    res[key] = val;

  return res;
}