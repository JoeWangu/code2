import 'package:flutter/material.dart';

import 'data.dart';

class DocumentPage extends StatelessWidget {
  const DocumentPage({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(useMaterial3: true),
      home: DocumentScreen(
        document: Document(),
      ),
    );
  }
}

class DocumentScreen extends StatelessWidget {
  final Document document;

  const DocumentScreen({
    required this.document,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Body goes here'),
      ],
    );
  }
}
