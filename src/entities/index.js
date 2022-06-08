import pacienteRoutes from './paciente/adapters/http';
// import userSockets from './user/adapters/socket';
// import authRoutes from './auth/adapters/http';

export const Routes = (app) => {
  pacienteRoutes(app, '/pacient');
  //  authRoutes(app);

}

export const Sockets = (io, socket) => {
  // userSockets(io, socket);
}