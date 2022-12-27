import {memo} from "react";
import {useAppDispatch} from "../../hooks/store";
import {changeSelectedLeague} from "../../store/leaguesSlice";
import {LeagueItemContainer} from "./styled";

type Props = {
	name: string;
	id: number;
	selected?: boolean;
}

const LeagueItem = ({name, id, selected}: Props) => {
	const changeSelected = () => {
		dispatch(changeSelectedLeague(id));
	}
	const dispatch = useAppDispatch();
	return <LeagueItemContainer className={selected ? 'is-selected' : ''} onClick={changeSelected}>
		<img src={`https://media.api-sports.io/football/leagues/${id}.png`} width={30} />
		<span>{name}</span>
		</LeagueItemContainer>
}

export default memo(LeagueItem);
