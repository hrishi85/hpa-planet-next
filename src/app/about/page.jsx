import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import History from "@/components/Home/history";
import PagePFooter from "@/components/prefooter";
import VisionMission from "@/components/VisionMission";
import { getURL } from "@/utils";

async function fetchData() {
    try {
        const historyURL = getURL(`/api/history`);
        const visionMissionURL = getURL(`/api/vision-mission?populate=banner`);

        const [historyRes, visionMissionRes] = await Promise.all([
            fetch(historyURL).then(res => res.json()),
            fetch(visionMissionURL).then(res => res.json()),
        ]);
  
        return {
            history: historyRes.data || null,
            visionMission: visionMissionRes.data || null,
            error: null,
        };
    } catch (err) {
        console.error('Fetch failed:', err);
        return {
            history: null,
            visionMission: null,
            error: 'Failed to load content. Please try again later.',
        };
    }
}

export default async function About() {

	const { history, visionMission, error } = await fetchData();

	if (error) {
		return <div className="flex w-full h-full items-center justify-center text-red-600">{error}</div>;
	}

    return (
        <>
            <PageHeader />
            {
                history && history.companyHistory && ( <History history={history.companyHistory} withPadding={true} /> )
            }
            {
                visionMission && visionMission.visionMission && ( <VisionMission visionMission={visionMission} /> )
            }
            <PagePFooter />
            <PageFooter />
        </>
    );
}