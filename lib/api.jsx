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



export async function getPrograms() {
  const res = await client.getEntries({ content_type: 'program' });

  return res.items.map((item) => ({
    id: item.sys.id,
    category: item.fields.category,
    title: item.fields.title,
    subtext: item.fields.subtext,
    description: item.fields.description,
    svg: item.fields.svg?.fields?.file?.url
      ? `https:${item.fields.svg.fields.file.url}`
      : null,
    duration: item.fields.duration,
    classSize: item.fields.classSize,
    prerequisites: item.fields.prerequisites || [],
    achievements: item.fields.achievements || [],

    testimonials: Array.isArray(item.fields.testimonials)
  ? item.fields.testimonials.map((item) => ({
      name: item.fields.name,
      comment: item.fields.comment,
      image: item.fields.image?.fields?.file?.url
  ? `https:${item.fields.image.fields.file.url}`
  : ''
    }))
  : item.fields.testimonials
  ? [{
      name: item.fields.testimonials.fields.name,
      comment: item.fields.testimonials.fields.comment,
     image: item.fields.testimonials.fields.image.fields.file.url
  ? `https:${item.fields.testimonials.fields.image.fields.file.url}`
  : ''
    }]
  : [],

  }));
}

