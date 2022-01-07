import React from 'react'

import { Layout, MyContainer, PageHeader } from '../../../components'

import { Typography } from '@material-ui/core'

const About = () => {
    const text = [
        'Автономная некоммерческая организация "Комплексный центр медицинского и социального обслуживания населения" работает с февраля 2020 г. Основная цель общественной организации является предоставление медицинских и социальных услуг гражданам, частично утратившим способность к самообслуживанию в связи с преклонным возрастом, болезнью, инвалидностью, лицам, пострадавшим в результате чрезвычайных ситуаций. ',
        'Фирменное название организации - АНО "ДолгоЖить". С сентября 2021 г., организация является общественным куратором Отделения сестринского ухода(ссылка) Республиканской клинической больницы №3. Как куратор, организация реализует на базе отделения общественные проекты и оказывает социальную поддержку пациентам.',
        'Основная миссия общественной организации - содействие развитию паллиативной помощи в регионе. Большое внимание будет уделяться семьям с тяжелобольными и паллиативными пациентами.',
        'Сегодня АНО "ДолгоЖить" реализует социальный проект по Школе домашнего ухода (ссылка) для близких родственников пациентов с дефицитом самообслуживания и имеющих, в том числе статус "паллиативного пациента". Данный проект стал победителем конкурса Фонда президентских грантов. В команде проекта - врачи и медсестры паллиативной медицинской помощи.',
        'С 23 сентября 2021 г. директором АНО "ДолгоЖить" стала Наталия Каратаева - инициатор и руководитель социальных проектов в поддержку неизлечимых пациентов с терминальными стадиями заболеваний почек и печени, и их близких родственников. Более подробно об этих проектах можно узнать из раздела "Спецпроекты по донорству" (ссылка).'
    ]
    return (
        <Layout>
            <MyContainer style={{ marginTop: 100, marginBottom: 100 }} wrapper={true} >
                <PageHeader title="О нас" />
                {text.map((item, index) => (
                    <Typography variant="h6" key={index} style={{ marginTop: 50 }}>{item}</Typography>
                ))}
            </MyContainer>
        </Layout>
    )
}

export default About