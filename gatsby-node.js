export async function createPages({ actions, graphql, reporter }) {
  const resultado = await graphql(`
    query {
      allDatoCmsHabitacione {
        nodes {
          slug
        }
      }
    }
  `);

  if (resultado.errors) {
    reporter.panic('No hubo resultado', resultado.errors);
  }

  //Si hay paginas, crear archivo
  const habitaciones = resultado.data.allDatoCmsHabitacione.nodes;

  habitaciones.forEach(habitacion => {
    actions.createPage({
      path: habitacion.slug,
      component: require.resolve('./src/components/habitaciones.js'),
      context: {
        slug: habitacion.slug
      }


    })
  })
}
