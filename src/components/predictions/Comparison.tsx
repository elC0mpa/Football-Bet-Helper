import {useAppSelector} from "../../hooks/store";
import {HomeAway} from "../../types/Prediction";
import ComparisonBar from "./ComparisonBar";
import {ComparisonsContainer} from "./styled";

const Comparison = () => {
	const comparisonData = useAppSelector((state) => state.fixtures.comparison)
	const getLabelFromKey = (key: string) => {
		return key === 'att' ? 'Attack' : key === 'def' ? 'Defense' : key === 'form' ? 'Form' : key === 'goals' ? 'Goals' : key === 'total' ? 'Total' : key === 'h2h' ?  'Head To Head' : 'Poisson Distribution'
	}
	return (
		<ComparisonsContainer>
			{Object.keys(comparisonData!).map((key) => {
			const label: string = getLabelFromKey(key)
			const data: HomeAway = (comparisonData as any)[key]
			return <ComparisonBar {...{label, data}} key={label}/>
			})}
		</ComparisonsContainer>
	)
}

export default Comparison;


