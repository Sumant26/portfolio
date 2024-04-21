import React from "react";

export default function Header({ title, align }) {
  return <div style={{ textAlign: { align } }}>{title}</div>;
}
