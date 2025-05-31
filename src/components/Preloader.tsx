
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show preloader for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-white">SPX</span>
              </motion.div>
              
              {/* Pulse Ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 border-2 border-blue-400 rounded-lg"
              />
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-xl font-semibold text-white mb-2">SPXCloud</h2>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-gray-400"
            >
              Booting up your server...
            </motion.p>
          </motion.div>

          {/* Loading Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="mt-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
            style={{ maxWidth: "200px" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
