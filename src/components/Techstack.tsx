import Image from "next/image";
import { TagList } from "./TagList";
import docker from '@/images/techstack/docker.png'
import git from '@/images/techstack/git.png'
import spring from '@/images/techstack/spring.png'
import react from '@/images/techstack/react.png'
import figma from '@/images/techstack/figma.png'
import tailwind from '@/images/techstack/tailwind.png'
import { TagListItem } from "./TagList";

export default function TechStack() {

    return (
        <TagList>
            <TagListItem className="hover:bg-neutral-100 hover:shadow-md transition duration-200 rounded-lg">
                <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Image src={docker} alt="Docker Logo" width={24} height={24} />
                    Docker
                </a>
            </TagListItem>

            <TagListItem className="hover:bg-neutral-100 hover:shadow-md transition duration-200 rounded-lg">
                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Image src={git} alt="Git Logo" width={18} height={18} />
                    Git
                </a>
            </TagListItem>

            <TagListItem className="hover:bg-neutral-100 hover:shadow-md transition duration-200 rounded-lg">
                <a href="https://spring.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Image src={spring} alt="Spring Logo" width={18} height={18} />
                    Spring
                </a>
            </TagListItem>

            <TagListItem className="hover:bg-neutral-100 hover:shadow-md transition duration-200 rounded-lg">
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Image src={react} alt="React Logo" width={18} height={18} />
                    React
                </a>
            </TagListItem>

            <TagListItem className="hover:bg-neutral-100 hover:shadow-md transition duration-200 rounded-lg">
                <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Image src={figma} alt="Figma Logo" width={18} height={18} />
                    Figma
                </a>
            </TagListItem>

            <TagListItem className="hover:bg-neutral-100 hover:shadow-md transition duration-200 rounded-lg">
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Image src={tailwind} alt="Tailwind CSS Logo" width={18} height={18} />
                    Tailwind CSS
                </a>
            </TagListItem>
        </TagList>
    );
}