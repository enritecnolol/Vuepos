import moment from './moment'
import has from 'lodash.has'

export const Names = {
    TODAY: 'today',
    YESTERDAY: 'yesterday',
    THIS_WEEK: 'this_week',
    THIS_MONTH: 'this_month',
    THIS_YEAR: 'this_year',
    LAST_WEEK: 'last_week',
    LAST_MONTH: 'las_month',
    LAST_YEAR: 'last_year',
    DAYS_BEFORE: 'days_before',
}

export const namesDict = {
    [Names.TODAY]: 'Hoy',
    [Names.YESTERDAY]: 'Ayer',
    [Names.THIS_WEEK]: 'Esta semana',
    [Names.THIS_MONTH]: 'Este mes',
    [Names.THIS_YEAR]: 'Este año',
    [Names.LAST_WEEK] : 'Semana pasada',
    [Names.LAST_MONTH] : 'Mes pasado',
    [Names.LAST_YEAR]:'Año pasado',
}

export const relativeDates = {
    [Names.DAYS_BEFORE]: ({ndays, offset = 0}) => {
        const to =  moment().subtract(offset,'day');
        return  [
            to.subtract(ndays,'day'),
            to
        ]
    },
    [Names.TODAY]:  [
        moment(),
        moment()
    ],
    [Names.YESTERDAY]:  [
        moment().subtract(1,'day'),
        moment().subtract(1,'day')
    ],
    [Names.THIS_WEEK]:  [
        moment().startOf('week'),
        moment().endOf('week'),
    ],
    [Names.THIS_MONTH]:  [
        moment().startOf('month'),
        moment().endOf('month'),
    ],
    [Names.THIS_YEAR]:  [
        moment().startOf('year'),
        moment().endOf('year'),
    ],
    [Names.LAST_WEEK]:  [
        moment().subtract(1,'week').startOf('week'),
        moment().subtract(1,'week').endOf('week'),
    ]
    ,
    [Names.LAST_MONTH]:  [
        moment().subtract(1,'month').startOf('month'),
        moment().subtract(1,'month').endOf('month'),
    ],
    [Names.LAST_YEAR]:  [
        moment().subtract(1,'year').startOf('year'),
        moment().subtract(1,'year').endOf('year'),
    ],

}

export const getRelativeDatesFromStringified = stringified =>  {
    if (stringified !== null) {
        const obj = JSON.parse(stringified)
        if (!obj || !has(obj,'name')) {
            return null
        }

    if (has(relativeDates, obj.name)) {
        if (typeof relativeDates[obj.name] === "function") {
            return relativeDates[obj.name](obj.params)
        }
        else {
            return relativeDates[obj.name]
        }

    }
    }
    return null
}

export const getRelativeDates = name => {
    return has(relativeDates, name) && typeof relativeDates[name] !== "function"  ? relativeDates[name] : null
}

export const stringifyDynamicRelativeDates = (name, params = null) => {
    return JSON.stringify({name, params})
}