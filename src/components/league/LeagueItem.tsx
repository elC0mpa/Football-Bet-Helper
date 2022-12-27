import {LeagueItemContainer} from "./styled";

type Props = {
	name: string;
	id: number;
}
const LeagueItem = ({name, id}: Props) => {
	return <LeagueItemContainer>
		<img src={`https://media.api-sports.io/football/leagues/${id}.png`} width={30} />
		<span>{name}</span>
		</LeagueItemContainer>
}

export default LeagueItem;
