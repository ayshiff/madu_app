import {
    ICompanyDomainResponse,
    IregisterContentResponse
} from 'madu/actions/register.actions';

export const registerContentResponseMock: IregisterContentResponse = {
    roles: ['user'],
    email: 'corentin.croizat@hetic.net',
    firstname: 'corentin',
    lastname: 'croizat',
    workplace: 'Progrès',
    department: 'first',
    id: '6c12d736-6339-42b7-8850-d2a8d8de8462',
    company_id: '68720aab-bde3-4953-9aaf-9c3151801e44'
};

export const companyDomainResponseMock: ICompanyDomainResponse = {
    address: {
        value: '24 rue du progres montreuil',
        lat: 2.412336,
        lng: 48.643817
    },
    companyName: 'hetic',
    domainName: 'hetic.net',
    workplace: ['test'],
    department: ['test'],
    employees: '300 - 400',
    name: 'string',
    lastName: 'string',
    email: 'string@hetic.net',
    id: '68720aab-bde3-4953-9aaf-9c3151801e44',
    status: 'not_enough_poi'
};
