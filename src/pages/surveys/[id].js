import { useRouter } from "next/router";
import Card from "@/components/base/card";
import { useSelector } from "react-redux";
import { selectAnswersBySurveyId } from "@/components/base/store/answerSlice";

const ViewResults = () => {
    const router = useRouter();
    const { id } = router.query;

    const surveysData = useSelector(selectAnswersBySurveyId(id));

    const data = JSON.stringify(surveysData)

    return (
        <Card title="Results" width="third" comingSoon={true}>
            <code style={{ color: "white" }}>
                {data}
            </code>
        </Card>
    )
}

export default ViewResults