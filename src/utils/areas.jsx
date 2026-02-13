export function readAreas() {
  const modules = import.meta.glob("../assets/areas/**/main*");
  const elements = Object.keys(modules);
  const areas = elements.map((area) => {
    const areaDescription = getAreaDescription(area);
    return {
      src: getFolderName(area),
      id: crypto.randomUUID(),
      description: getAreaDescription(area),
      resoruce: getAreaDescriptionSource(areaDescription)
    };
  });
  return areas;
}

function getFolderName(path) {
  const absolutePath = path.replace("../assets/areas/", "");
  return absolutePath;
}

function getAreaDescription(path) {
  let partialPath = getFolderName(path);
  const indexOfOrder = partialPath.indexOf("_");
  partialPath = partialPath.substring(indexOfOrder + 1, partialPath.length);
  const indexOfFirst = partialPath.indexOf("/");
  const areaName = capitalizeFirstLetter(
    partialPath.substring(0, indexOfFirst).replaceAll("_", " "),
  );
  return areaName;
}

function getAreaDescriptionSource(description) {
  return description.replaceAll(" ", "").toLowerCase();
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
