import {TeamVisualizerContainer} from "./styled";

type Props = {
	name: string;
	id: number;
	type?: "home" | "away";
	isHighlighted?: boolean | null;
}

const TeamVisualizer = ({name, id, isHighlighted, type = "home"}: Props) => {
	return (
		<TeamVisualizerContainer className={type === 'away' ? 'is-reverse' : ''}>
			<img width={30} src={`https://media.api-sports.io/football/teams/${id}.png`}/>
			<span className={isHighlighted ? 'is-highlighted' : ''}>{name}</span>
		</TeamVisualizerContainer>
	)
}

export default TeamVisualizer;
