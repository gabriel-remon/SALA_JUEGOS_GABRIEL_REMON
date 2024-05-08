import {  EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

const firebaseProviders: EnvironmentProviders = importProvidersFrom(
    provideFirebaseApp(() => 
      initializeApp(environment),
                    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
                );

export {firebaseProviders};