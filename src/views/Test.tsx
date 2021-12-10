import {defineComponent} from 'vue';
import {
    QCard,
    QCardSection,
    QForm,
    QHeader,
    QInput,
    QLayout,
    QPage,
    QPageContainer,
    QToolbar,
    QToolbarTitle
} from "quasar"

export default defineComponent({
    name: 'Test',
    setup() {
        return () => <>
            <QLayout>
                <QHeader elevated>
                    <QToolbar>
                        <QToolbarTitle>
                            Test
                        </QToolbarTitle>
                    </QToolbar>
                </QHeader>
                <QPageContainer>
                    <QPage padding={true}>
                        <div class="column">
                            <div class="row">
                                <QCard bordered square>
                                    <QCardSection>
                                        <QForm>
                                            <QInput rules={[(val: string) => !!val || 'Please type something']}
                                                    autofocus
                                                    dense
                                                    modelValue="login"/>
                                            <QInput rules={[(val: string) => !!val || 'Please type something']}
                                                    dense
                                                    type="password"
                                                    modelValue="password"/>
                                        </QForm>
                                    </QCardSection>
                                </QCard>
                            </div>
                        </div>
                    </QPage>
                </QPageContainer>
            </QLayout>
        </>
    },
});
