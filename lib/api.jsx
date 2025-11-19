//import { Component } from "react";
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





export async function getEcosystem() {
    const res = await client.getEntries({
    content_type: "ecosystem",
  });
  

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
  });
  

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
  });
  

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