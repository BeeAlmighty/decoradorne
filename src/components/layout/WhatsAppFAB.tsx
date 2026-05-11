'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { buildDefaultWhatsAppUrl } from '@/lib/whatsapp';

export function WhatsAppFAB() {
  const url = buildDefaultWhatsAppUrl();
  const prefersReducedMotion = useReducedMotion();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat with Decor Adorne on WhatsApp"
    >
      <div className="relative">
        {/* Outer pulse ring */}
        {!prefersReducedMotion && (
          <motion.span
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{ scale: [1, 1.6], opacity: [0.35, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            aria-hidden="true"
          />
        )}
        {/* Inner pulse ring */}
        {!prefersReducedMotion && (
          <motion.span
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{ scale: [1, 1.3], opacity: [0.25, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
            aria-hidden="true"
          />
        )}
        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg cursor-pointer"
        >
          <MessageCircle className="w-6 h-6 text-white fill-white" strokeWidth={1.5} />
        </motion.div>
      </div>
    </a>
  );
}
