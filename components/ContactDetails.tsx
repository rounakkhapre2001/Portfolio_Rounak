import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { memo } from 'react';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';
import { buttonHover, buttonVariants, containerVariants, imageVariants } from '@/style';

const ContactDetails = () => {
  return (
    <motion.section
      className="w-full max-w-4xl mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div variants={imageVariants} className="relative w-[350px] h-[350px] flex items-center justify-center">
          <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/20 ring-4 ring-purple-500/20"></div>
          <div className="relative w-[490px] h-[490px] mt-[49px]">
            <Image
              src="/assets/avatar.png"
              alt="Profile photo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 350px"
              priority
            />
          </div>
        </motion.div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
            Connect With Me
          </h2>
          <p className="text-gray-300 mb-6">
            I&apos;m available on various social media platforms. Feel free to connect with me! <br />
            I usually get back to you within 24 hours.
          </p>

          <SocialLinks />

          <Link href="/resume" passHref>
            <motion.div variants={buttonVariants} whileHover={buttonHover}>
              <Button className="inline-flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-colors duration-300 w-full sm:py-3 px-6 relative overflow-hidden group mt-4">
                <span className="relative z-10">View My Resume</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default memo(ContactDetails);
