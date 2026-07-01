
import './team.css'
import TeamCard from "./TeamCard";
import teamMem1 from '../assets/teamMem1.png'
import teamMem2 from '../assets/teamMem2.png'
import teamMem3 from '../assets/teamMem3.png'
import teamMem4 from '../assets/teamMem4.png'

export default function Team() {
    return (
        <div className="team" id="team">
        <h2 className="h2">
            Our <span>Team</span>
        </h2>

        <div className="team-container">
            <TeamCard
            image={teamMem1}
            role="Head Chef"
            description="Culinary lead focused on quality dishes."
            />

            <TeamCard
            image={teamMem2}
            role="Assistant Chef"
            description="Supports kitchen operations and prep work."
            />

            <TeamCard
            image={teamMem3}
            role="Kitchen Manager"
            description="Manages workflow and daily kitchen tasks."
            />

            <TeamCard
            image={teamMem4}
            role="Pastry Chef"
            description="Creates desserts and sweet specialties."
            />
        </div>
        </div>
    );
}