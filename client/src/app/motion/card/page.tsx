"use client";

import { cn } from "@/lib/utils";
import {
  Icon24Hours,
  Icon360View,
  Icon3dCubeSphere,
  IconMessage,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Card = () => {
  const [open, setIsOpen] = useState(true);

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{
              type: "spring",
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.3,
            }}
            className={cn(
              "w-80 min-h-[34rem] h-[34rem] rounded-xl",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05), 0_2px_3px_rgba(0,0,0,0.04)]",
              "p-6 flex flex-col",
              "shadow-xl border border-neutral-100 bg-white"
            )}
          >
            <h2 className="font-bold text-[10px] text-blue-500 text-center">
              {" "}
              KKP Components
            </h2>
            <p className="text-black mt-2 text-[10px] p-2">
              A collection of beautiful elements, lets work together to build
            </p>
            <div className="flex items-center justify-center">
              <button className="border border-purple-300 flex items-center gap-1 text-[10px] mt-2 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05), 0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1">
                <span className="text-black font-semibold text-md ">
                  Subscribe
                </span>
                <IconX
                  className="text-red-600 hover:size-5"
                  onClick={() => setIsOpen(false)}
                  size={18}
                />
              </button>
            </div>
            <div className="flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
              {/* Motion Div starts here */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  mass: 0.5,
                  damping: 10,
                  bounce: 0.5,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  filter: "blur(10px)",
                }}
                whileTap={{
                  scale: 0.9,
                  filter: "blur(0px)",
                }}
                whileDrag={{
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
                dragElastic={0.2}
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 20,
                }}
                dragMomentum={false}
                dragSnapToOrigin={true}
                dragPropagation={true}
                className="absolute inset-0 h-full w-full bg-white border-neutral-400 cursor-pointer rounded-lg divide-y divide-purple-200 text-black"
              >
                <div className="flex p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05), 0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Icon24Hours className="h-4 w-4 text-black" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-black">
                      24/7 hours
                    </p>
                    <p className="text-[8px] text-black">
                      Super fast delivery at warp speed
                    </p>
                  </div>
                </div>
                <div className="flex p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05), 0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Icon360View className="h-4 w-4 text-black" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-black">
                      360 Degree
                    </p>
                    <p className="text-[8px] text-black">
                      360 degree view of the product
                    </p>
                  </div>
                </div>
                <div className="flex p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05), 0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Icon3dCubeSphere className="h-4 w-4 text-black" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-black">3D Cube</p>
                    <p className="text-[8px] text-black">
                      3D cube view of the product
                    </p>
                  </div>
                </div>
                <div className="flex p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05), 0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <IconMessage className="h-4 w-4 text-black" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-black">
                      Send Message
                    </p>
                    <p className="text-[8px] text-black">
                      We are here to help you
                    </p>
                  </div>
                </div>
                <div className="flex p-4">
                  <IconPlus size={16} />
                  <p className="text-center pl-2">Create Project</p>
                </div>
              </motion.div>
              {/* Motion Div ends here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
