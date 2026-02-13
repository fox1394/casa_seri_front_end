export function getAreaDetail(resource, t) {
  let description = "";

  switch (resource) {
    case t("salotto"):
      description = t("salotto_detail");
      break;
    case t("terrazzavistacosta"):
      description = t("terrazzavistacosta_detail");
      break;
    case t("cucinacompleta"):
      description = t("cucinacompleta_detail");
      break;
    case t("zonapranzo"):
      description = t("zonapranzo_detail");
      break;
    case t("cameradaletto"):
      description = t("cameradaletto_detail");
      break;
    case t("terrazzavistaterra"):
      description = t("terrazzavistaterra_detail");
      break;
    case t("bagnocompleto"):
      description = t("bagnocompleto_detail");
  }
  console.log(description)
  return description.trim() === "" ?  "" : t("troverai")+ ": " +  description.trim();
}
