//import { Component } from "react";
import {client} from "./contentful";



export async function getReviews() {
  const res = await client.getEntries({ content_type: "review" }, { cache: "no-store" });

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
  }, { cache: "no-store" });
  

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





export async function getEcosystem() {
    const res = await client.getEntries({
    content_type: "ecosystem",
  }, { cache: "no-store" });
  

  return res.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    goal: item.fields.goal,
    subcomponents: item.fields.subcomponents || [],
    subtext: item.fields.subtext,
    components: item.fields.components || [],
    description: item.fields.description,

    
  }));
}

export async function getEntrepreneurship() {
    const res = await client.getEntries({
    content_type: "entrepreneurship",
  }, { cache: "no-store" });
  

  return res.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    goal: item.fields.goal,
    subcomponents: item.fields.subcomponents || [],
    subtext: item.fields.subtext,
    components: item.fields.components || [],
    description: item.fields.description,

    
  }));
}

export async function getCommunity() {
    const res = await client.getEntries({
    content_type: "community",
  }, { cache: "no-store" });
  

  return res.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    goal: item.fields.goal,
    subcomponents: item.fields.subcomponents || [],
    subtext: item.fields.subtext,
    components: item.fields.components || [],
    description: item.fields.description,

    
  }));
}

export async function getProject() {
    const res = await client.getEntries({
    content_type: "projects",
  }, { cache: "no-store" });
  

  return res.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    category: item.fields.category,
    timeline: item.fields.timeline,
    description: item.fields.description,
    impact: item.fields.impact || [],
     
  }));
}


export async function getFeaturedProject() {
  const res = await client.getEntries({
    content_type: "featuredproject",
    include: 2
  }, { cache: "no-store" });

    return res.items.map((item) => ( {
    tag: item.fields.tag,
    title: item.fields.title,
    subtitle: item.fields.subtitle,
    description: item.fields.description,
    timeline: item.fields.timeline,
    highlight: item.fields.highlight,
    impact: item.fields.impact,
    stats: item.fields.stats?.map(stat => ({
      icon: stat.fields.icon?.fields.file.url
        ? `https:${stat.fields.icon.fields.file.url}`
        : null,
      value: stat.fields.value,
      label: stat.fields.label
    })) || []
  }));
}


export async function getEvents() {
    const res = await client.getEntries({
    content_type: "events",
  }, { cache: "no-store" });
  

  return res.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    date: item.fields.date,
   image: item.fields.image?.fields?.file?.url
  ? `https:${item.fields.image.fields.file.url}`
  : null,
    link: item.fields.link,
    description: item.fields.description,
     
  }));
}
