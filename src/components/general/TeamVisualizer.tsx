import {TeamVisualizerContainer} from "./styled";

type Props = {
	name: string;
	id: number;
	type?: "home" | "away";
}

const TeamVisualizer = ({name, id, type = "home"}: Props) => {
	return (
		<TeamVisualizerContainer className={type === 'away' ? 'is-reverse' : ''}>
			<img width={30} src={`https://media.api-sports.io/football/teams/${id}.png`}/>
			<span>{name}</span>
		</TeamVisualizerContainer>
	)
}

export default TeamVisualizer;
