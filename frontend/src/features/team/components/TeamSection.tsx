import React from 'react';
import TeamMemberCard, { type TeamMember } from './TeamMemberCard';

const TEAM_MEMBERS: TeamMember[] = [
    {
        id: '1',
        name: 'Alvaro Silvera',
        role: 'Co-Founder / Frontend Developer',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', // Temporary placeholder
        socials: { portfolio: 'https://alvaro-silvera-portfolio.vercel.app/', github: 'https://github.com/alvarotsilvera07' }
    },
    {
        id: '2',
        name: 'Luka Mercado',
        role: 'Co-Founder / Frontend Developer',
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop', // Temporary placeholder
        socials: { github: 'https://github.com/lukamercado2365-blip' }
    },
    {
        id: '3',
        name: 'Jonathan Oliva',
        role: 'Co-Founder / Backend Developer',
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop', // Temporary placeholder
        socials: { portfolio: 'https://jonathan-oliva.github.io/JonathanOliva/', github: 'https://github.com/Jonathan-Oliva' }
    },
    {
        id: '4',
        name: 'Enzo Lopez',
        role: 'Co-Founder / Backend Developer',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop', // Temporary placeholder
        socials: { github: 'https://github.com/EnzoL1016' }
    }
];

const TeamSection: React.FC = () => {
    return (
        <section
            id="team"
            className="snap-start snap-always relative z-10 flex min-h-screen flex-col w-full px-8 py-24 md:px-12 md:py-32 items-center justify-center bg-[#111111]/80 backdrop-blur-md border-t border-zinc-800/30"
        >
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">

                {/* Section Header */}
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <h2 className="text-zinc-500 font-oswald uppercase tracking-[0.3em] text-sm md:text-base font-semibold select-none">
                        The Squad
                    </h2>
                    <h3 className="font-anton uppercase text-5xl md:text-7xl lg:text-8xl leading-none tracking-normal text-white select-none">
                        OUR TEAM
                    </h3>
                </div>

                {/* Members Grid - 1 Col Mobile, 2 Col Tablet, 4 Col Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {TEAM_MEMBERS.map((member) => (
                        <TeamMemberCard key={member.id} member={member} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TeamSection;
