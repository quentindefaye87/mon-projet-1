"use client";

import { useCallback, useEffect, useState } from "react";

export interface QuoteItem {
  id: string;
  productSlug: string;
  productName: string;
  summary: string;
  width: number;
  height: number;
  quantity: number;
  estimate: { low: number; high: number };
}

const KEY = "lc-quote-list";
const EVENT = "lc-quote-list-change";

function read(): QuoteItem[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as QuoteItem[]) : [];
  } catch {
    return [];
  }
}

function write(items: QuoteItem[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    // Storage may be unavailable (private mode); the list then lives only for this page view.
  }
  window.dispatchEvent(new Event(EVENT));
}

export function useQuoteList() {
  const [items, setItems] = useState<QuoteItem[]>([]);

  useEffect(() => {
    setItems(read());
    const sync = () => setItems(read());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const add = useCallback((item: Omit<QuoteItem, "id">) => {
    const next = [...read(), { ...item, id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}` }];
    write(next);
    setItems(next);
  }, []);

  const remove = useCallback((id: string) => {
    const next = read().filter((i) => i.id !== id);
    write(next);
    setItems(next);
  }, []);

  const clear = useCallback(() => {
    write([]);
    setItems([]);
  }, []);

  return { items, add, remove, clear };
}
