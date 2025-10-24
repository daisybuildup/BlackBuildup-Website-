import {client} from "./contentful";

export const revalidate = 60; // revalidate every 60 seconds

export async function getReviews() {
  const res = await client.getEntries({ content_type: "review" });

  return res.items.map((item) => ({
    id: item.sys.id,
    name: item.fields.name,
    role: item.fields.role,
    comment: item.fields.comment,
    image: item.fields.image?.fields?.file?.url
  ? `https:${item.fields.image.fields.file.url}`
  : null,
  }));
}

export async function getTeams() {
      console.log("Client:", client); // should not be undefined
 const res = await client.getEntries({
    content_type: "team",
  });
  

  return res.items.map((item) => ({
    id: item.sys.id,
    name: item.fields.name,
    role: item.fields.role,
    image: item.fields.image?.fields?.file?.url
  ? `https:${item.fields.image.fields.file.url}`
  : null,
    about: item.fields.about,
    linkedin: item.fields.linkedin || "",
    bio: item.fields.bio || "",
    
  }));
}
