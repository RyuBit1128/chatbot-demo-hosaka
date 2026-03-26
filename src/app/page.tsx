"use client";

import ChatWindow from "../components/ChatWindow";
import config from "../config/hosaka-dental";

export default function Home() {
  return <ChatWindow config={config} />;
}
