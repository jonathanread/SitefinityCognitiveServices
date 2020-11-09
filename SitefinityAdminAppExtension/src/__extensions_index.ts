import { SitefinityExtensionStore } from "progress-sitefinity-adminapp-sdk/app/api/v1";
import { TextAnalysisToolbarExtenderModule } from "./text-analysis";



declare var sitefinityExtensionsStore: SitefinityExtensionStore;

sitefinityExtensionsStore.addExtensionModule(TextAnalysisToolbarExtenderModule);

