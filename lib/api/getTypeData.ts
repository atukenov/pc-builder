export const getTypeData = async (type: string) => {
  const res = await fetch("http://localhost:3000/api/components/type/" + type);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
